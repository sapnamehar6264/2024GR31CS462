# Use Python image for Flask
# Use Python 3.10 or later for compatibility
FROM python:3.10-slim AS backend


# Set working directory for Flask
WORKDIR /app

# Copy the Python requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask app code
COPY . .

# Expose the port that Flask will run on
EXPOSE 5000

# Command to run the Flask app
CMD ["python", "app.py"]
