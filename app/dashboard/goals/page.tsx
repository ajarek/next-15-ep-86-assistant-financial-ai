
import { Button } from '@/components/ui/button';
import React from 'react';

interface Goal {
  name: string;
  daysLeft: number;
  currentAmount: number;
  targetAmount: number;
}

const FinancialGoals = () => {
  const goals: Goal[] = [
    {
      name: 'Fundusz awaryjny',
      daysLeft: 15,
      currentAmount: 12750.83,
      targetAmount: 15000.00,
    },
    {
      name: 'Emerytura',
      daysLeft: 92,
      currentAmount: 32680.15,
      targetAmount: 1000000.00,
    },
    {
      name: 'Zaliczki',
      daysLeft: 30,
      currentAmount: 18500.00,
      targetAmount: 50000.00,
    },
    {
      name: 'Spłata kartę kredytową',
      daysLeft: 25,
      currentAmount: 0.00,
      targetAmount: 1250.67,
    },
  ];

  const overallProgress = 37; // Calculated percentage

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const calculateProgressPercentage = (current: number, target: number) => {
    return target === 0 ? 0 : Math.min(100, (current / target) * 100);
  };

  return (
    <div className="w-full mx-auto  rounded-xl shadow-md overflow-hidden p-6">
      <h1 className="text-2xl font-bold  mb-6">Cele finansowe</h1>
      
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.name} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{goal.name}</h2>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              zostało dni  {goal.daysLeft} 
              </span>
            </div>
            
            <div className="mb-1">
              <span className="">
                {formatCurrency(goal.currentAmount)} of {formatCurrency(goal.targetAmount)}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${calculateProgressPercentage(goal.currentAmount, goal.targetAmount)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full mt-6">
        + Add Goal
      </Button>

      <div className="my-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium ">Ogólny postęp</span>
          <span className="text-sm font-medium ">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full" 
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FinancialGoals;