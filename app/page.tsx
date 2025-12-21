"use client";

import React, { useState } from "react";
import { 
  Truck, 
  Calculator, 
  DollarSign, 
  User, 
  Briefcase, 
  Clock, 
  Coins 
} from "lucide-react";

// Assuming standard Shadcn component paths - adjust if yours differ
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PayrollPage() {
  // State for form inputs
  const [name, setName] = useState("");
  const [role, setRole] = useState("mover");
  const [hours, setHours] = useState("");
  const [tips, setTips] = useState("");
  
  // State for calculation results
  const [result, setResult] = useState<{ gross: number; tax: number; net: number } | null>(null);

  // Base rates for moving company roles
  const rates = {
    mover: 18.50,
    driver: 24.00,
    foreman: 32.00,
  };

  const handleCalculate = () => {
    const hourlyRate = rates[role as keyof typeof rates];
    const hoursNum = parseFloat(hours) || 0;
    const tipsNum = parseFloat(tips) || 0;

    const basePay = hourlyRate * hoursNum;
    const gross = basePay + tipsNum;
    const tax = gross * 0.18; // Assuming flat 18% tax deduction for estimation
    const net = gross - tax;

    setResult({ gross, tax, net });
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorative Blobs for "Vibrant" feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="z-10 text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-3 bg-purple-600 rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            MoveMaster
          </h1>
        </div>
        <p className="text-gray-400">Vibrant Payroll Solutions</p>
      </div>

      {/* Main Calculator Card */}
      <Card className="w-full max-w-md bg-black/40 backdrop-blur-md border-purple-500/30 shadow-2xl relative z-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-purple-100">
            <Calculator className="w-5 h-5 text-purple-400" />
            Payroll Calculator
          </CardTitle>
          <CardDescription className="text-gray-400">
            Enter shift details to calculate net pay.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          
          {/* Employee Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
              <User className="w-4 h-4 text-purple-400" /> Employee Name
            </Label>
            <Input 
              id="name" 
              placeholder="Ex: John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-900/50 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500/20"
            />
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" /> Role
            </Label>
            <Select onValueChange={setRole} defaultValue={role}>
              <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white focus:ring-purple-500/20">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                <SelectItem value="mover">Mover ($18.50/hr)</SelectItem>
                <SelectItem value="driver">Driver ($24.00/hr)</SelectItem>
                <SelectItem value="foreman">Foreman ($32.00/hr)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Hours Worked */}
            <div className="space-y-2">
              <Label htmlFor="hours" className="text-gray-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" /> Hours
              </Label>
              <Input 
                id="hours" 
                type="number" 
                placeholder="0" 
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="bg-gray-900/50 border-gray-700 text-white focus:border-purple-500"
              />
            </div>

            {/* Tips */}
            <div className="space-y-2">
              <Label htmlFor="tips" className="text-gray-300 flex items-center gap-2">
                <Coins className="w-4 h-4 text-purple-400" /> Tips ($)
              </Label>
              <Input 
                id="tips" 
                type="number" 
                placeholder="0" 
                value={tips}
                onChange={(e) => setTips(e.target.value)}
                className="bg-gray-900/50 border-gray-700 text-white focus:border-purple-500"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button 
            onClick={handleCalculate}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:scale-[1.02]"
          >
            Calculate Pay
          </Button>

          {/* Results Display */}
          {result && (
            <div className="w-full bg-gray-900/80 rounded-lg p-4 border border-purple-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Gross Pay</span>
                <span className="text-white font-mono">${result.gross.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Est. Tax (18%)</span>
                <span className="text-red-400 font-mono">-${result.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-purple-300 font-semibold">Net Pay</span>
                <div className="flex items-center text-green-400 font-bold text-xl font-mono">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {result.net.toFixed(2)}
                </div>
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </main>
  );
}