import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface EMEFooterCTAProps {}

export function EMEFooterCTA({}: EMEFooterCTAProps) {
  return (
    <section>
      <Card className="bg-green-600 text-white text-center">
        <CardContent className="py-16">
          <h2 className="text-4xl mb-6">
            Ready to Elevate Your Agricultural Projects?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the EME Club today and unlock exclusive benefits, priority
            access to high-yield agricultural projects, and a community of successful
            agricultural participants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => {
                const form = document.getElementById("eme-name");
                if (form) {
                  form.scrollIntoView({ behavior: "smooth" });
                  form.focus();
                }
              }}
            >
              Apply for Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              Contact Our Team
            </Button>
          </div>
          <div className="mt-8 text-lg opacity-90">
            <p>Questions about membership? We&apos;re here to help!</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
