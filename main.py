from .schemas import FundCreate
from sqlalchemy.orm import Session
from fastapi import Depends
from .database import get_db
from .models import Fund
from fastapi import FastAPI

# Create the FastAPI app instance
app = FastAPI()

# Create a fund (POST request)
@app.post("/funds/")
def create_fund(fund: FundCreate, db: Session = Depends(get_db)):
    db_fund = Fund(name=fund.name, total_value=fund.total_value)
    db.add(db_fund)
    db.commit()
    db.refresh(db_fund)
    return db_fund

# Retrieve fund data (GET request)
@app.get("/funds/")
def read_funds(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    funds = db.query(Fund).offset(skip).limit(limit).all()
    return funds
