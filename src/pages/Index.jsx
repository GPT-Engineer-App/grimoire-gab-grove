import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BookOpen, MessageSquare, FolderGit2, Send } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Grimoire</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-purple-200">Home</a></li>
              <li><a href="#" className="hover:text-purple-200">Chat</a></li>
              <li><a href="#" className="hover:text-purple-200">Projects</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4">
          <div className="mb-6">
            <h2 className="font-semibold mb-2 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" /> Chats
            </h2>
            <ScrollArea className="h-40">
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-purple-600">Chat 1</a></li>
                <li><a href="#" className="text-sm hover:text-purple-600">Chat 2</a></li>
                <li><a href="#" className="text-sm hover:text-purple-600">Chat 3</a></li>
              </ul>
            </ScrollArea>
          </div>
          <Separator className="my-4" />
          <div>
            <h2 className="font-semibold mb-2 flex items-center">
              <FolderGit2 className="h-4 w-4 mr-2" /> Projects
            </h2>
            <ScrollArea className="h-40">
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-purple-600">Project 1</a></li>
                <li><a href="#" className="text-sm hover:text-purple-600">Project 2</a></li>
                <li><a href="#" className="text-sm hover:text-purple-600">Project 3</a></li>
              </ul>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Area */}
        <main className="flex-grow p-4">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <div className="flex flex-col h-full">
                <ScrollArea className="flex-grow mb-4 border rounded-md p-4">
                  {/* Chat messages would go here */}
                  <p className="mb-2"><strong>AI:</strong> Hello! How can I assist you today?</p>
                  <p className="mb-2"><strong>You:</strong> Can you help me with a coding problem?</p>
                </ScrollArea>
                <div className="flex space-x-2">
                  <Input placeholder="Type your message..." className="flex-grow" />
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="flex flex-col h-full">
                <Textarea
                  placeholder="Write your code here..."
                  className="flex-grow mb-4 font-mono"
                />
                <div className="border rounded-md p-4 bg-gray-100">
                  <h3 className="font-semibold mb-2">Output/Console</h3>
                  <pre className="text-sm">
                    {/* Console output would go here */}
                    > Hello, World!
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Index;