# vulnerable_script.py
# gitleaks detect -s /path/to/your/repo --report=gitleaks_report.json

import requests

def connect_to_database():
    # Hardcoded credentials (vulnerable)
    username = "admin"
    password = "SuperSecretPassword123"

    # Connection string (vulnerable)
    connection_string = f"postgresql://{username}:{password}@localhost:5432/mydatabase"
    print("Connecting to database with connection string:")
    print(connection_string)

def access_third_party_api():
    # Hardcoded API key (vulnerable)
    api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

    url = "https://api.example.com/data"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }

    response = requests.get(url, headers=headers)
    print("API response status:", response.status_code)
    return response.json()

if __name__ == "__main__":
    connect_to_database()
    data = access_third_party_api()
    print(data)
