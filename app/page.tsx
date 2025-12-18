import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-primary">
          Welcome Home
        </h1>
        <p className="text-xl text-secondary">
          Your vibrant dark theme is now active
        </p>
        <p className="text-accent">
          Powered by electric purples and cyan accents
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button className="bg-primary hover:bg-primary/80 text-background">
            Primary Action
          </Button>
          <Button className="bg-accent hover:bg-accent/80 text-background">
            Accent Action
          </Button>
        </div>
        <div className="mt-8 p-6 rounded-lg bg-muted border border-border">
          <p className="text-foreground">
            This card uses your <span className="text-primary">muted</span> and{" "}
            <span className="text-accent">border</span> theme colors
          </p>
        </div>
      </div>
    </main>
  );
}
