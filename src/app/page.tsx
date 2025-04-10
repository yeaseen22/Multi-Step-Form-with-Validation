"use client"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog"
import { EmployeeOnboarding } from "./features/employee-onboarding"
import { useTheme } from "@/app/contexts/theme-provider"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen">
      <nav className="bg-background p-4 border-b border-foreground">
        <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">MY Form</h1>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="text-foreground"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-white text-black font-bold hover:bg-gray-200" variant="secondary">
              My Profile
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold">Employee Register</h1>
        <p>Welcome to the employee onboarding multi step form process. Please fill in the following information to get started.</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-black text-white hover:bg-gray-800 font-bold mt-4">
              New Register
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>New Employee</DialogTitle>
            </DialogHeader>
            <EmployeeOnboarding />
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
