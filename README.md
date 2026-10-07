# GRC Metrics Dashboard

Real-time Governance, Risk, and Compliance metrics and tracking dashboard.

## Key Metrics

- **Compliance Status** - Overall compliance percentage
- **Risk Level** - Critical, High, Medium, Low risks
- **Policy Coverage** - Policies in place and updated
- **Training Status** - Staff security awareness completion
- **Incident Metrics** - MTTR (Mean Time to Respond)
- **Audit Findings** - Open and closed findings
- **Vulnerability Status** - Critical vulnerabilities count

## Dashboard Features

- Real-time metrics updates
- Historical trends
- Risk heatmaps
- Compliance reporting
- Executive summaries
- Alert system for critical issues

## Architecture

- **Backend:** Python Flask + SQLAlchemy
- **Frontend:** React with Recharts
- **Database:** PostgreSQL
- **Reporting:** PDF export

## Data Sources

- Risk register
- Audit findings
- Vulnerability scanner
- Compliance checklist
- Incident log
- Training records

## Usage

```bash
pip install -r requirements.txt
python run_dashboard.py
# Visit http://localhost:8000
```
