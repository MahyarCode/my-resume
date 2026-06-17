import React from "react";
import Activity from "./activity";

const Experience: React.FC = () => {
  return (
    <div className="flex justify-center h-auto py-4">
      <div className="contain-content w-5/6 md:w-4/5">
        <h1 className="text-style-role text-5xl font-bold font-display text-center p-12">
          Experience
        </h1>
        <Activity
          name="Digital Nexus"
          type="experience"
          role="Research And Development Specialist"
          imgSource="/images/DigitalNexus.png"
          datePeriod="September 2025 - April 2026"
          description={[
            `Conducted feasibility analysis on multiple new venture ideas proposed by leadership, assessing market size, competitive
              landscape, and adoption potential across domestic and international markets.`,
            `Sourced demand and customer-growth assumptions from peer-reviewed literature and market data, and built three-
              scenario financial models (best, base, and worst case), evaluating rate of return under each to test profitability.`,
            `Presented findings that projected the ventures as unviable, informing leadership's decision not to proceed and avoiding
              investment in unprofitable initiatives.`,
          ]}
        />
        <Activity
          name="University of Tehran"
          type="experience"
          role="Statistical Specialist"
          imgSource="/images/uni.png"
          datePeriod="October 2023 - May 2025"
          description={[
            `Cleaned and structured raw datasets in Python (for large datasets) or Excel (for small datasets), and produced descriptive-
              statistics reports to detect data-quality issues (outliers, miscoded or missing values), additionally running randomness
              checks to validate assumptions before analysis.`,
            `Conducted within-group (Pre-Test to Post-Test) and between-group comparisons, selecting parametric or non-parametric
              tests based on normality checks, and evaluating significance at the 95% confidence level (p < 0.05).`,
            `Built an LSTM forecasting model for a time-series prediction task, testing several input-sequence window configurations
              and selecting the highest-performing one based on RMSE, MAPE and R².`,
            `Automated an end-to-end statistical analysis workflow in Python for similarly-structured datasets; performing the
              appropriate tests, computing results, and generating complete MS Word reports that reduced turnaround from almost 50
              hours to under 30 seconds with full accuracy on validated cases.`,
          ]}
        />
      </div>
    </div>
  );
};

export default Experience;
