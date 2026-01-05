import { Calendar, Clock, Ticket } from "lucide-react";
import type { Event } from "@shared/schema";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-neutral-900 border border-neutral-800 p-6 hover:border-secondary transition-colors duration-300"
    >
      {/* Tape effect on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-400/90 rotate-2 shadow-sm z-10 opacity-80" />

      <div className="flex flex-col h-full space-y-4">
        <div className="flex justify-between items-start">
          <div className="bg-neutral-800 text-neutral-400 px-3 py-1 font-mono text-xs uppercase tracking-widest">
            {event.genre}
          </div>
          <span className="text-secondary font-bold text-xl font-display">
            {format(new Date(event.date), "dd.MMM")}
          </span>
        </div>

        <h3 className="text-3xl font-bold uppercase leading-tight group-hover:text-secondary transition-colors">
          {event.bandName}
        </h3>

        {event.imageUrl && (
          <div className="w-full aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-neutral-800">
            <img 
              src={event.imageUrl} 
              alt={event.bandName} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <p className="text-muted-foreground line-clamp-3 text-sm">
          {event.description}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-2 border-t border-neutral-800 text-sm font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Doors: {event.doorTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-primary" />
            <span>Entry: {event.ticketPrice}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
