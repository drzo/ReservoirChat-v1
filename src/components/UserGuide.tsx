import React from 'react';
import { Book, Brain, Network, Settings, BarChart2, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsList, Tab, TabsPanel } from './ui/tabs';

interface FeatureGuideProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureGuide = ({ icon: Icon, title, description }: FeatureGuideProps) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5 text-indigo-600" />
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function UserGuide() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="w-5 h-5" />
          User Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chat">
          <TabsList className="w-full justify-start mb-4">
            <Tab value="chat">Chat Interface</Tab>
            <Tab value="network">Network</Tab>
            <Tab value="parameters">Parameters</Tab>
            <Tab value="metrics">Metrics</Tab>
          </TabsList>

          <TabsPanel value="chat" className="space-y-4">
            <FeatureGuide
              icon={MessageSquare}
              title="Chat Interface"
              description="Ask questions about reservoir computing, get code examples, and receive guidance on implementing ESN models. The chat interface provides context-aware responses based on ReservoirPy documentation."
            />
          </TabsPanel>

          <TabsPanel value="network" className="space-y-4">
            <FeatureGuide
              icon={Network}
              title="Network Visualization"
              description="Interactive visualization of the Echo State Network architecture. Observe input nodes (blue), reservoir nodes (gray), and output nodes (green). Hover over nodes to see details and drag to rearrange the network layout."
            />
          </TabsPanel>

          <TabsPanel value="parameters" className="space-y-4">
            <FeatureGuide
              icon={Settings}
              title="Parameter Controls"
              description="Adjust key ESN parameters like reservoir size, spectral radius, input scaling, and leaking rate. Changes are reflected in real-time in the network visualization and affect the model's performance."
            />
          </TabsPanel>

          <TabsPanel value="metrics" className="space-y-4">
            <FeatureGuide
              icon={BarChart2}
              title="Performance Metrics"
              description="Monitor model performance through key metrics: Training MSE, Validation MSE, Spectral Radius, and Memory Capacity. These metrics update automatically after each simulation run."
            />
          </TabsPanel>
        </Tabs>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Quick Tips</h3>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Use the chat interface to get started with specific questions</li>
            <li>Experiment with different parameter combinations to optimize performance</li>
            <li>Watch the network visualization to understand information flow</li>
            <li>Monitor metrics to evaluate model improvements</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}