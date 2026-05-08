import { MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const messages = [
  {
    id: 1,
    from: "Mr. Adebayo",
    subject: "Mathematics",
    message: "Amara has been doing excellent work in class. Keep encouraging her!",
    time: "Today, 10:30 AM",
    unread: true,
  },
  {
    id: 2,
    from: "Mrs. Okonkwo",
    subject: "English Language",
    message: "Please remind Amara to submit her essay by Friday.",
    time: "Yesterday, 2:15 PM",
    unread: true,
  },
  {
    id: 3,
    from: "School Admin",
    subject: "General",
    message: "Parent-teacher conference scheduled for March 15th.",
    time: "Mar 8, 2024",
    unread: false,
  },
]

const teachers = [
  { name: "Mr. Adebayo", subject: "Mathematics", avatar: "MA" },
  { name: "Mrs. Okonkwo", subject: "English", avatar: "MO" },
  { name: "Dr. Mensah", subject: "Physics", avatar: "DM" },
  { name: "Mr. Hassan", subject: "Chemistry", avatar: "MH" },
]

export function Communication() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Messages</h3>
        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          2 new
        </span>
      </div>

      {/* Recent Messages */}
      <div className="space-y-3 mb-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded-lg border ${msg.unread ? "border-primary/30 bg-primary/5" : "border-border"} hover:bg-muted/30 transition-colors cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{msg.from}</p>
                  <p className="text-xs text-muted-foreground">{msg.subject}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{msg.time}</span>
            </div>
            <p className="text-sm text-muted-foreground ml-10 line-clamp-1">{msg.message}</p>
          </div>
        ))}
      </div>

      {/* Quick Contact */}
      <div>
        <p className="text-sm text-muted-foreground mb-3">Quick Contact</p>
        <div className="grid grid-cols-2 gap-2">
          {teachers.map((teacher, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="justify-start gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-[10px] font-semibold text-primary">{teacher.avatar}</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-medium">{teacher.name}</p>
                <p className="text-[10px] text-muted-foreground">{teacher.subject}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
        <Send className="w-4 h-4 mr-2" />
        New Message
      </Button>
    </div>
  )
}
