from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_calculate_should_fail_when_required_fields_are_missing():
    response = client.post("/calc")
    assert response.status_code == 422
    assert response.json()['detail'][0]['msg'] == "field required"


def test_calculate_should_fail_when_invalid_data_provided():
    response = client.post("/calc", json={"number1": -12, "number2": 2})
    assert response.status_code == 422
    assert response.json()['detail'][0]['msg'] == 'ensure this value is greater than 0'


def test_calculate():
    response = client.post("/calc", json={"number1": 10, "number2": 2})
    assert response.status_code == 200
    assert response.json()['result'] == 12
