import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Wand2, MessageSquare, FolderGit2, Send, Code, Terminal } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wand2 className="h-6 w-6" />
            <h1 className="text-2xl font-bold">HackerWizard</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-green-200">Spellbook</a></li>
              <li><a href="#" className="hover:text-green-200">Enchantments</a></li>
              <li><a href="#" className="hover:text-green-200">Artifacts</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-green-400 p-4">
          <div className="mb-6">
            <h2 className="font-semibold mb-2 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" /> Enchantments
            </h2>
            <ScrollArea className="h-40">
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-green-300">Firewall Charm</a></li>
                <li><a href="#" className="text-sm hover:text-green-300">Encryption Spell</a></li>
                <li><a href="#" className="text-sm hover:text-green-300">Debugging Hex</a></li>
              </ul>
            </ScrollArea>
          </div>
          <Separator className="my-4 bg-green-700" />
          <div>
            <h2 className="font-semibold mb-2 flex items-center">
              <FolderGit2 className="h-4 w-4 mr-2" /> Artifacts
            </h2>
            <ScrollArea className="h-40">
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-green-300">Quantum Compiler</a></li>
                <li><a href="#" className="text-sm hover:text-green-300">Neural Network Wand</a></li>
                <li><a href="#" className="text-sm hover:text-green-300">Blockchain Grimoire</a></li>
              </ul>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Area */}
        <main className="flex-grow p-4 bg-gray-900 text-green-400">
          <Tabs defaultValue="spellcraft" className="w-full">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="spellcraft" className="data-[state=active]:bg-green-700">Spellcraft</TabsTrigger>
              <TabsTrigger value="codex" className="data-[state=active]:bg-green-700">Codex</TabsTrigger>
            </TabsList>
            <TabsContent value="spellcraft">
              <div className="flex flex-col h-full">
                <ScrollArea className="flex-grow mb-4 border border-green-700 rounded-md p-4 bg-gray-800">
                  <p className="mb-2"><strong className="text-green-300">Wizard:</strong> Greetings, apprentice! What cybersecurity enchantment shall we weave today?</p>
                  <p className="mb-2"><strong className="text-green-300">You:</strong> I seek to fortify my network against dark magic intrusions.</p>
                </ScrollArea>
                <div className="flex space-x-2">
                  <Input placeholder="Cast your query..." className="flex-grow bg-gray-800 border-green-700 text-green-400" />
                  <Button className="bg-green-700 hover:bg-green-600">
                    <Wand2 className="h-4 w-4 mr-2" />
                    Invoke
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="codex">
              <div className="flex flex-col h-full">
                <Textarea
                  placeholder="Inscribe your arcane algorithms here..."
                  className="flex-grow mb-4 font-mono bg-gray-800 border-green-700 text-green-400"
                />
                <div className="border border-green-700 rounded-md p-4 bg-gray-800">
                  <h3 className="font-semibold mb-2 text-green-300">Arcane Output</h3>
                  <pre className="text-sm text-green-400">
                    {`> Encryption spell successfully cast!`}
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-green-400 p-4 text-center text-sm">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-green-300">Arcane Privacy</a></li>
            <li><a href="#" className="hover:text-green-300">Magical Terms</a></li>
            <li><a href="#" className="hover:text-green-300">Summon Support</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
