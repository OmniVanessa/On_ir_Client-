from pydantic import BaseModel
class StatusUpdate(BaseModel):
    category: str
    message: str
    bg_color: str
    text_color: str
