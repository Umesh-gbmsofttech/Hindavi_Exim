// src/components/ui/Timeline.jsx
import React from 'react';
import { 
  Timeline as MuiTimeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineOppositeContent 
} from '@mui/lab'; // Requires @mui/lab package
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Sample data structure based on project requirements [cite: 49, 85]
const historyData = [
  { year: '2020', title: 'Foundation', desc: 'Hindavi Exim established in Mumbai.' },
  { year: '2022', title: 'Global Reach', desc: 'Expansion into Middle Eastern markets.' },
  { year: '2024', title: 'Tech Integration', desc: 'Launched advanced supply chain tracking.' },
  { year: '2026', title: 'Market Leadership', desc: 'Recognized as a leading ethical trade partner.' }
];

const Timeline = () => {
  return (
    <MuiTimeline position="alternate">
      {historyData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
            {item.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index !== historyData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography>{item.desc}</Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};

export default Timeline;