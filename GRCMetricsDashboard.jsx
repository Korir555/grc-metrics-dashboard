import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GRCMetricsDashboard = () => {
  const [metrics, setMetrics] = useState({
    overallCompliance: 78,
    criticalRisks: 3,
    highRisks: 8,
    mediumRisks: 15,
    openFindings: 22,
    mttr: 4.2, // hours
    trainingCompletion: 85,
    auditProgress: 72
  });

  const [complianceByStandard, setComplianceByStandard] = useState([
    { standard: 'Kenya DPA', compliance: 82 },
    { standard: 'CBK', compliance: 76 },
    { standard: 'ISO 27001', compliance: 79 },
    { standard: 'CII', compliance: 80 }
  ]);

  const [riskTrend, setRiskTrend] = useState([
    { month: 'Aug', critical: 5, high: 12, medium: 20 },
    { month: 'Sep', critical: 4, high: 10, medium: 18 },
    { month: 'Oct', critical: 3, high: 8, medium: 15 }
  ]);

  const [incidentMetrics, setIncidentMetrics] = useState([
    { name: 'Data Breach', value: 2 },
    { name: 'Malware', value: 5 },
    { name: 'DDoS', value: 1 },
    { name: 'Config Error', value: 3 },
    { name: 'Other', value: 4 }
  ]);

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4'];

  const KPICard = ({ title, value, unit, trend, status }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <p className="text-gray-600 text-sm font-semibold uppercase">{title}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-3xl font-bold">{value}{unit}</span>
        <span className={`text-sm font-semibold px-2 py-1 rounded ${
          status === 'good' ? 'bg-green-100 text-green-800' :
          status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {trend}
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">GRC Metrics Dashboard</h1>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Overall Compliance"
          value={metrics.overallCompliance}
          unit="%"
          trend="↑ 3%"
          status="good"
        />
        <KPICard
          title="Critical Risks"
          value={metrics.criticalRisks}
          unit=""
          trend="↓ 2"
          status="good"
        />
        <KPICard
          title="Open Findings"
          value={metrics.openFindings}
          unit=""
          trend="↓ 5"
          status="warning"
        />
        <KPICard
          title="MTTR (hours)"
          value={metrics.mttr}
          unit="h"
          trend="↓ 0.8h"
          status="good"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Compliance by Standard</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceByStandard}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="standard" angle={-45} textAnchor="end" height={80} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="compliance" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Risk Trend (Last 3 Months)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="critical" stroke="#ef4444" />
              <Line type="monotone" dataKey="high" stroke="#f97316" />
              <Line type="monotone" dataKey="medium" stroke="#eab308" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Incident Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incidentMetrics}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {incidentMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Risk Matrix</h2>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Risk Assessment Status</p>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-red-100 p-3 rounded">
                <p className="font-bold text-red-800">3</p>
                <p className="text-xs text-red-600">Critical</p>
              </div>
              <div className="bg-orange-100 p-3 rounded">
                <p className="font-bold text-orange-800">8</p>
                <p className="text-xs text-orange-600">High</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded">
                <p className="font-bold text-yellow-800">15</p>
                <p className="text-xs text-yellow-600">Medium</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Last Updated: 2026-10-07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GRCMetricsDashboard;
