import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const BusinessHours: React.FC = () => {
  const [quettaTime, setQuettaTime] = useState<{
    timeString: string;
    dayName: string;
    isOpen: boolean;
    statusText: string;
  }>({
    timeString: '',
    dayName: '',
    isOpen: false,
    statusText: '',
  });

  useEffect(() => {
    const checkQuettaStatus = () => {
      try {
        const now = new Date();
        const quettaDate = new Date(
          now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
        );

        const dayOfWeek = quettaDate.getDay(); // 0 is Sunday, 5 is Friday
        const hours = quettaDate.getHours();
        const minutes = quettaDate.getMinutes();
        const currentTotalMinutes = hours * 60 + minutes;

        const dayName = quettaDate.toLocaleDateString('en-US', {
          weekday: 'long',
          timeZone: 'Asia/Karachi',
        });
        const timeString = quettaDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Karachi',
        });

        let isOpen = false;
        let statusText = '';

        if (dayOfWeek === 5) {
          // Friday: approx 3:30 PM (15:30) to 10:30 PM (22:30)
          const friOpen = 15 * 60 + 30; // 930
          const friClose = 22 * 60 + 30; // 1350
          if (currentTotalMinutes >= friOpen && currentTotalMinutes < friClose) {
            isOpen = true;
            statusText = 'Open now (Friday evening hours)';
          } else if (currentTotalMinutes < friOpen) {
            isOpen = false;
            statusText = 'Opens approx. 3:30 PM (after Friday prayers)';
          } else {
            isOpen = false;
            statusText = 'Closed for the night · Opens Saturday 10:30 AM';
          }
        } else {
          // Sunday–Thursday & Saturday: 10:30 AM (10:30) to 10:30 PM (22:30)
          const stdOpen = 10 * 60 + 30; // 630
          const stdClose = 22 * 60 + 30; // 1350
          if (currentTotalMinutes >= stdOpen && currentTotalMinutes < stdClose) {
            isOpen = true;
            statusText = 'Open now · Closes 10:30 PM';
          } else if (currentTotalMinutes < stdOpen) {
            isOpen = false;
            statusText = 'Opens at 10:30 AM today';
          } else {
            isOpen = false;
            const nextDayFriday = (dayOfWeek + 1) % 7 === 5;
            statusText = nextDayFriday
              ? 'Closed for the night · Opens Friday ~3:30 PM'
              : 'Closed for the night · Opens 10:30 AM';
          }
        }

        setQuettaTime({
          timeString,
          dayName,
          isOpen,
          statusText,
        });
      } catch {
        setQuettaTime({
          timeString: '10:30 AM – 10:30 PM',
          dayName: 'Standard Hours',
          isOpen: true,
          statusText: 'Open during regular store hours',
        });
      }
    };

    checkQuettaStatus();
    const interval = setInterval(checkQuettaStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const scheduleDays = [
    { day: 'Saturday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Sunday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Monday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Tuesday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Wednesday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Thursday', hours: '10:30 AM – 10:30 PM', note: 'Standard hours' },
    { day: 'Friday', hours: 'Approx. 3:30 PM – 10:30 PM', note: 'Commences after Friday prayers' },
  ];

  return (
    <section id="hours" className="py-16 sm:py-24 border-b border-[#E6E0D6] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Context (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#1E40AF] mb-2.5">
              Weekly Timetable
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121C2B] mb-4">
              Opening Hours
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6">
              Mustafa Stationers operates daily on Samungli Road in Housing Scheme, Quetta, with extended evening hours to assist students and professionals after work.
            </p>

            {/* Live Quetta Local Time Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E6E0D6] shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0ECE1]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8699]">
                  Quetta Local Time (PST)
                </span>
                <span className="font-mono text-sm font-semibold text-[#121C2B] tabular-nums">
                  {quettaTime.timeString || 'Current Time'}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                {quettaTime.isOpen ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <span className="font-medium text-[#121C2B]">
                  {quettaTime.statusText || 'Open during store hours'}
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#7A8699] leading-relaxed">
              *Friday hours commence in the afternoon at approximately 3:30 PM to accommodate Friday congregational prayers.
            </p>
          </div>

          {/* Right Column: Timetable Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-[#E6E0D6] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E6E0D6]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1E40AF]" />
                  <span className="font-serif text-lg font-medium text-[#121C2B]">
                    Store Operating Schedule
                  </span>
                </div>
                <span className="text-xs text-[#7A8699]">Shop No. 10</span>
              </div>

              <div className="divide-y divide-[#F0ECE1]">
                {scheduleDays.map((item) => {
                  const isCurrentDay = quettaTime.dayName.toLowerCase() === item.day.toLowerCase();
                  return (
                    <div
                      key={item.day}
                      className={`py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 transition-colors ${
                        isCurrentDay ? 'bg-[#FAF7F2] -mx-4 px-4 rounded-md font-medium' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${isCurrentDay ? 'text-[#1E40AF] font-semibold' : 'text-[#121C2B]'}`}>
                          {item.day}
                        </span>
                        {isCurrentDay && (
                          <span className="text-[10px] uppercase tracking-wider text-[#1E40AF] font-bold">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono tabular-nums text-[#121C2B]">
                          {item.hours}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified Note Banner */}
              <div className="mt-6 pt-5 border-t border-[#E6E0D6] flex items-center gap-2 text-xs text-[#526075]">
                <Clock className="w-4 h-4 text-[#1E40AF] shrink-0" />
                <span>
                  Hours verified from business records: 10:30 AM – 10:30 PM (Friday approx. 3:30 PM – 10:30 PM).
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
