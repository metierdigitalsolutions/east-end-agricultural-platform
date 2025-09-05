import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { emeClubBenefits } from "./emeClubData";
export function EMEBenefitsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl text-center mb-12 text-gray-900">
        Exclusive Member Benefits
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emeClubBenefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <benefit.icon className={`h-12 w-12 ${benefit.color} mb-4`} />
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {benefit.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
