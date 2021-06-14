from pydantic import BaseModel, Field


class Calculator(BaseModel):
    number1: int = Field(gt=0, description='must be a positive integer')
    number2: int = Field(ge=0, description='must be a non-negative integer')

    class Config:
        schema_extra = {
            "example": {
                "number1": 12,
                "number2": 0,
            }
        }
