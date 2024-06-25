import React from 'react'
import { assets, songsData } from '../assets/assets'

export const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between py-0.5 items-center text-white px-4 my-2'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-14 rounded-[4px]' src={songsData[0].image} alt="" />
        <div className='flex flex-row gap-8'>
          <div>
            <p className='text-sm font-medium'>{songsData[0].name}</p>
            <p className='text-xs text-neutral-400'>{songsData[0].artist}</p>
          </div>
          <span className='size-3.5 p-0.5 border border-neutral-400 bg-neutral-900 hover:border-white text-neutral-400 rounded-full cursor-pointer m-auto duration-300'>
            <img className='opacity-70 hover:opacity-100 duration-300' src={assets.plus_icon} alt="" />
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center rounded p-2 gap-2'>
        <div className="flex gap-6 items-center justify-center">
          <img className='size-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.shuffle_icon} alt="" />
          <img className='size-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.prev_icon} alt="" />
          <span className="p-1.5 border border-white rounded-full duration-200 cursor-pointer">
            <img className='size-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.play_icon} alt="" />
          </span>
          <img className='size-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.next_icon} alt="" />
          <img className='size-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center justify-center gap-3 text-sm text-neutral-400'>
          <p>1:05</p>
          <div className="w-[60vw] max-w-2xl bg-neutral-600 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-12 bg-neutral-50 rounded-full"/>
          </div>
          <p>3:27</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 opacity-70">
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.plays_icon} alt="" />
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.mic_icon} alt="" />
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.queue_icon} alt="" />
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.speaker_icon} alt="" />
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.volume_icon} alt="" />
        <div className="w-20 bg-neutral-50 h-1 rounded-full">
          {/* Volume bar */}
        </div>
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.mini_player_icon} alt="" />
        <img className='w-4 opacity-70 cursor-pointer hover:opacity-100' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}
