# backend/schemas.py
from pydantic import BaseModel

class FundCreate(BaseModel):
    name: str
    total_value: float
