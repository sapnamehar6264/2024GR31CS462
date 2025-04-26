5G Network Optimization Project

# 🎥 Project Walkthrough

We have prepared a video walkthrough explaining the project development, approach, and key results.

👉 [Watch the Project Walkthrough Video Here](https://drive.google.com/file/d/1h3nmruRApIChg2XC1s91aYcFLJdgwEPu/view?usp=sharing)

This project aims to optimize 5G network parameters using machine learning models.
It includes a frontend (React.js), backend (Flask), ML model training, and Kubernetes deployment setup.

5G-Network-Optimization/
├── client/                 # React.js frontend application
│   ├── public/             # Static files for frontend
│   └── src/                # React source files (components, API calls)
├── k8s/                    # Kubernetes manifests (deployment and service)
├── model/                  # (Placeholder for trained ML models or related code)
├── node_modules/           # Node dependencies (for client and root)
├── static/                 # Static files served by Flask backend
│   └── style.css           # CSS for frontend templates
├── templates/              # HTML templates for Flask backend
│   └── index.html
├── app.py                  # Flask backend application
├── train_model.py          # Script to train the ML model
├── docker-compose.yml      # Docker Compose setup for local development
├── Dockerfile              # Dockerfile to containerize the Flask app
├── package.json            # Node.js project config (frontend)
├── package-lock.json       # Node.js lock file (frontend)
├── requirements.txt        # Python dependencies for backend
├── deployment.yaml         # Kubernetes deployment configuration
├── service.yaml            # Kubernetes service configuration
├── .dockerignore           # Files to ignore in Docker builds
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation

Getting Started
1. Clone the Repository
git clone https://github.com/sapnamehar6264/2024GR31CS462.git
cd 5G-Network-Optimization

🛠️ Installation

Backend (Flask API)
# Navigate to project root
pip install -r requirements.txt
# Run the Flask app
python app.py

Frontend (React App)
cd client
npm install
npm start

🐳 Running with Docker
# Build and run containers
docker-compose up --build

☁️ Kubernetes Deployment
Make sure you have Kubernetes and kubectl configured.
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

📊 Machine Learning Model
train_model.py contains the code to train the optimization model.

📦 Dependencies
Frontend: React
Backend: Flask, sklearn, numpy, pandas
Containerization: Docker, Docker Compose
Deployment: Kubernetes

✍️ Author
Rajan Patel (202251093)
Sapna Mehar (202252336)
Tanishka Sharma (202251140)
Pari Ranasaria (202252083)
