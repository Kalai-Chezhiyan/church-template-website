import React from "react";
import { X } from "../icons/Icons";

export default function SidePanel({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop blur overlay */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className="relative w-full max-w-md h-full bg-white border-l-4 border-accent text-primary shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-primary/70 hover:text-accent hover:rotate-90 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex-1 overflow-y-auto py-12 scrollbar-hide">
          <div className="text-left mb-12">
            <h3 className="text-3xl font-bold font-heading uppercase tracking-widest leading-tight text-primary">
              {title}
            </h3>
            <div className="w-12 h-1 bg-accent mt-4" />
          </div>
          {children}
        </div>

        <div className="border-t border-primary/10 pt-6 text-center">
          <p className="text-xs text-primary/40 font-body italic">
            "Faith is the assurance of things hoped for"
          </p>
        </div>
      </div>
    </div>
  );
}
