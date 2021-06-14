from fastapi import Request
from fastapi.responses import HTMLResponse

from . import app, templates
from .models import Calculator


@app.get("/", response_class=HTMLResponse)
async def homepage(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/calc")
async def calculate(calculator: Calculator):
    res = calculator.number1 + calculator.number2
    return {"result": res}
