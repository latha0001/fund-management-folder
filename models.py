from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Fund(Base):
    __tablename__ = 'funds'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    total_value = Column(Float)
    companies = relationship("Company", back_populates="fund")

class Company(Base):
    __tablename__ = 'companies'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    investment = Column(Float)
    fund_id = Column(Integer, ForeignKey('funds.id'))
    fund = relationship("Fund", back_populates="companies")
