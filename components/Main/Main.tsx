"use client";
import Html from "@/public/icons/Html";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Gauge, gaugeClasses, LineChart } from "@mui/x-charts";
import { Progress } from "../ui/progress";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { colors } from "@mui/material";

type FormData = {
  rank: number;
  percentile: number;
  score: number;
};

function Main() {
  const [formData, setFormData] = useState<FormData>({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setFormData(data);
    setIsDialogOpen(false); // Close dialog on save
  };

  const handleCancel = () => {
    setIsDialogOpen(false); // Close dialog on cancel
  };

  return (
    <section className="flex flex-col md:flex-row ">
      <section>
        <div className="ml-8 space-y-4">
          <div className="text-slate-400 font-bold text-sm mt-6">
            Skill Test{" "}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-slate-100 border-2 rounded-md p-8">
            <Html />
            <div className="text-xl font-extrabold ">
              Hyper Text Markup Language
              <div className="text-xs text-slate-400">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </div>
            </div>
            <div className="bg-blue-950 text-white font-bold px-8 py-2 rounded-lg md:ml-8">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-950 hover:bg-blue-950"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Update
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-between">
                      Update Score <Html />
                    </DialogTitle>
                  </DialogHeader>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-12">
                      <div className="flex justify-between items-center">
                        <label className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-900 text-white">
                            1
                          </div>
                          Update your{" "}
                          <span className="font-extrabold">Rank</span>
                        </label>
                        <input
                          className="border-2 border-solid border-blue-400 rounded-md p-2 w-40"
                          placeholder="Rank"
                          type="number"
                          {...register("rank", {
                            required: "Rank is required",
                          })}
                        />
                        {errors.rank && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.rank.message}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-900 text-white">
                            2
                          </div>
                          Update your
                          <span className="font-extrabold">Percentile</span>
                        </label>
                        <input
                          className="border-2 border-solid border-blue-400 rounded-md p-2 w-40"
                          placeholder="Percentile"
                          type="number"
                          {...register("percentile", {
                            required: "Percentile is required",
                          })}
                        />
                        {errors.rank && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.rank.message}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-900 text-white">
                            3
                          </div>
                          Update your{" "}
                          <span className="font-extrabold">
                            Current Score (out of 15)
                          </span>
                        </label>
                        <input
                          className="border-2 border-solid border-blue-400 rounded-md p-2 w-40"
                          placeholder="Score"
                          type="number"
                          {...register("score", {
                            required: "Score is required",
                          })}
                        />
                        {errors.rank && (
                          <span className="text-red-500 text-sm mt-1">
                            {errors.rank.message}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button
                          type="button"
                          className="bg-white text-blue-600 border-blue-600 border-2 hover:bg-slate-200 hover:scale-x-95"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="gap-2 bg-blue-950 hover:scale-x-95"
                        >
                          Save
                          <MoveRight />
                        </Button>
                      </div>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="border-2 border-slate-100 rounded-md items-center justify-center">
            <div className="p-6 ml-6">
              <div className="font-extrabold">Quick Statistics</div>
              <div className="flex gap-2">
                <div className="flex items-center justify-start">
                  <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center ml-2">
                    🏆
                  </div>
                  <div className="ml-2">
                    <div className="font-bold">{formData.rank}</div>
                    <div className="text-xs text-slate-300 font-bold">
                      YOUR RANK
                    </div>
                  </div>
                  <div className="h-16 border-l border-gray-300 ml-8"></div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center ml-4">
                    🗒️
                  </div>
                  <div className="ml-2">
                    <div className="font-bold">{formData.percentile}%</div>
                    <div className="text-xs text-slate-300 font-bold">
                      PERCENTILE
                    </div>
                  </div>
                  <div className="h-16 border-l border-gray-300 ml-8"></div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center ml-4">
                    ✅
                  </div>
                  <div className="ml-2">
                    <div className="font-bold">{formData.score}/15</div>
                    <div className="text-xs text-slate-300 font-bold">
                      CORRECT ANSWERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-100 p-6">
            <div className="font-extrabold">Comparison Graph</div>
            <div className="flex mt-2 text-slate-600 justify-between">
              <div className="">
                <span className="font-bold">
                  You scored {formData.percentile}% percentile
                </span>{" "}
                which is lower than
                <div>
                  the average percentile 72% of all the engineers who took this
                  assessment
                </div>
              </div>
              <div className="flex items-center justify-center h-10 w-10 bg-slate-100 bottom-2 rounded-full rotate-90">
                📉
              </div>
            </div>
            <div className="">
              <LineChart
                xAxis={[
                  {
                    data: [
                      0, 5, 12, 25, 27, 29, 32, 35, 41, 44, 45, 50, 58, 66, 71,
                      79, 88, 100,
                    ],
                  },
                ]}
                series={[
                  {
                    data: [
                      0,
                      10,
                      18,
                      29,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                    ],
                    valueFormatter: (value) =>
                      value == null ? "NaN" : value.toString(),
                    color: "#8AA2DD ",
                  },
                  {
                    data: [
                      null,
                      null,
                      null,
                      null,
                      27,
                      33,
                      39,
                      41,
                      45,
                      50,
                      43,
                      28,
                      15,
                      11,
                      19,
                      null,
                      null,
                      null,
                    ],
                    color: "#8AA2DD  ",
                  },
                  {
                    data: [
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      2,
                      2,
                    ],
                    valueFormatter: (value) =>
                      value == null ? "?" : value.toString(),
                    color: "#8AA2DD ",
                  },
                ]}
                height={200}
                margin={{ top: 10, bottom: 20 }}
                leftAxis={null}
                className="space-y-4"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ml-8 md:ml-16 md:mr-4 mt-16 space-y-4">
        <div className="border-2 border-slate-100 rounded-md p-6">
          <div className="font-extrabold">Syllabus Wise Analysis</div>
          <div className="mt-10 space-y-4">
            <div className="">
              <div className="mb-4 text-slate-500 font-bold">
                HTML Tools, Forms, History
              </div>
              <div className="flex items-center justify-between  gap-6">
                <Progress
                  value={80}
                  className="[&>*]:bg-blue-500 [&>*]:rounded-r-full bg-blue-100 w-96"
                />
                <div className="text-blue-500 font-bold">80%</div>
              </div>
            </div>
            <div className="">
              <div className="mb-4 text-slate-500 font-bold">
                Tags & References in HTML
              </div>
              <div className="flex items-center justify-between  gap-6">
                <Progress
                  value={60}
                  className="[&>*]:bg-orange-500 [&>*]:rounded-r-full bg-orange-100 w-96"
                />
                <div className="text-orange-500 font-bold">60%</div>
              </div>
            </div>
            <div className="">
              <div className="mb-4 text-slate-500 font-bold">
                Tables & References in HTML
              </div>
              <div className="flex items-center justify-between  gap-6">
                <Progress
                  value={24}
                  className="[&>*]:bg-red-500 [&>*]:rounded-r-full bg-red-100 w-96"
                />
                <div className="text-red-500 font-bold">24%</div>
              </div>
            </div>
            <div className="">
              <div className="mb-4 text-slate-500 font-bold">
                Tables & CSS Basics
              </div>
              <div className="flex items-center justify-between  gap-6">
                <Progress
                  value={96}
                  className="[&>*]:bg-green-500 [&>*]:rounded-r-full bg-green-100 w-96"
                />
                <div className="text-green-500 font-bold">96%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-slate-100 rounded-md p-6 space-y-4">
          <div className="flex items-center justify-between font-extrabold">
            <div>Question Analysis</div>
            <div className="text-blue-600">{formData.score}/15</div>
          </div>
          <div className="text-slate-500">
            <span className="font-extrabold text-slate-600">
              You socred {formData.score} question correct out of 15.
            </span>{" "}
            However it still needs some improvements
          </div>
          <div className="flex items-center justify-center">
            <Gauge
              width={200}
              height={200}
              value={(formData.score / 15) * 100}
              innerRadius="70%"
              outerRadius="100%"
              text="🎯"
              sx={() => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: "#3464DB",
                },
              })}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
