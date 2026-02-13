from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import StatusUpdate
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hola desde FastAPI!"}
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
current_status = {
    "category:": "disponible",
    "message": "bienvenidos",
    "bg_color": "#1f2937",
    "text_color": "#ffffff"
}
@app.post("/admin/update-status")
async def update_status(status_update: StatusUpdate):
    global current_status
    current_status = status_update.model_dump()
    return {"status": "success", "updated_data": current_status}
@app.get("/client/get-status")
async def get_status():
    return current_status