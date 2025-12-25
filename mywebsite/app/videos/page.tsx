'use client';

import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  duration: string;
}

export default function VideosPage() {
  const [videos] = useState<Video[]>([
    { id: '1', title: '产品演示', duration: '2:30' },
    { id: '2', title: '使用教程', duration: '5:45' },
    { id: '3', title: '客户案例', duration: '10:20' },
  ]);

  const [sortBy, setSortBy] = useState<'title' | 'duration'>('title');

  // 修复的时长转换函数
  const durationToSeconds = (duration: string): number => {
    const parts = duration.split(':').map(part => parseInt(part, 10));
    
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    } else {
      return parts[0] || 0;
    }
  };

  // 排序视频
  const sortedVideos = [...videos].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      return durationToSeconds(a.duration) - durationToSeconds(b.duration);
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">产品视频</h1>
      
      <div className="mb-6">
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'title' | 'duration')}
          className="border p-2 rounded"
        >
          <option value="title">按标题排序</option>
          <option value="duration">按时长排序</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedVideos.map(video => (
          <div key={video.id} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-gray-600">时长: {video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}