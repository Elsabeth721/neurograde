import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="px-4 md:px-6 py-16 bg-gradient-to-br from-background to-muted rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/section1.jpg"
            alt="Code Review Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#primary] leading-tight">
            Accelerate Your Coding Skills
            <br />
            with Instant AI Feedback
          </h2>
          <p className="text-muted-foreground max-w-md">
            Submit your code, receive automated reviews, and track your growth.
            Our AI-driven platform ensures faster feedback, smarter learning, and measurable success.
          </p>
          <Button className="!bg-[#primary] hover:!bg-secondary text-primary-foreground">
            Start Reviewing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;