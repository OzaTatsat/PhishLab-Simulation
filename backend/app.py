import sqlite3
import csv
import io
import json
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from datetime import datetime
from pathlib import Path


from db import get_conn, init_db

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

init_db()


@app.route("/submit", methods=["POST"])
def submit_data():
    
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No JSON data received"}), 400
    except Exception:
        return jsonify({"error": "Invalid JSON"}), 400

    site_name = data.get("site_name")
    masked_email = data.get("masked_email")
    ip = request.remote_addr

    ts = datetime.now().isoformat()
    
   
    if not masked_email:
        return jsonify({"error": "Email required"}), 400

    conn = get_conn()
    try:
        c = conn.cursor()
      
        c.execute(
            """
            INSERT INTO logs (site_name, masked_email, captured_data, ip_address, timestamp)
            VALUES (?, ?, ?, ?, ?)
            """,
            (site_name, masked_email, json.dumps(data), ip, ts),
        )
        conn.commit()
        return jsonify({"message": "Logged successfully"}), 201
    except sqlite3.Error as e:
        
        conn.rollback()
        return jsonify({"error": f"Database error: {e}"}), 500
    finally:
        
        conn.close()


@app.route("/logs", methods=["GET"])
def get_logs():
    conn = get_conn()
    try:
        c = conn.cursor()
       
        c.execute("""
            SELECT site_name, masked_email, captured_data, ip_address, timestamp
            FROM logs
            ORDER BY id DESC
        """)
        rows = c.fetchall()
        logs = []
        for r in rows:
           
            log_data = dict(r)
            if 'captured_data' in log_data and log_data['captured_data']:
                log_data['captured_data'] = json.loads(log_data['captured_data'])
            logs.append(log_data)

        return jsonify(logs)
    except sqlite3.Error as e:
        return jsonify({"error": f"Database error: {e}"}), 500
    finally:
        conn.close()


@app.route("/export", methods=["GET"])
def export_csv():
    conn = get_conn()
    try:
        c = conn.cursor()
       
        c.execute("SELECT site_name, masked_email, captured_data, ip_address, timestamp FROM logs")
        rows = c.fetchall()

        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["Site", "Email", "Captured Data", "IP", "Timestamp"])
        
        for r in rows:
            row_dict = dict(r)
            captured_data = row_dict.get('captured_data', '{}')
            try:
               
                captured_data = json.loads(captured_data)
            except json.JSONDecodeError:
                captured_data = {}
                
            writer.writerow([
                row_dict.get('site_name'),
                row_dict.get('masked_email'),
                json.dumps(captured_data),
                row_dict.get('ip_address'),
                row_dict.get('timestamp')
            ])

        return Response(
            output.getvalue(),
            mimetype="text/csv",
            headers={"Content-Disposition": "attachment; filename=phishlab_logs.csv"}
        )
    except sqlite3.Error as e:
        return jsonify({"error": f"Database error: {e}"}), 500
    finally:
        conn.close()


if __name__ == "__main__":
    app.run(debug=True)
