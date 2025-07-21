"use client"
import Sidebar from "@/components/studio/Sidebar"
import TrackEditor from "@/components/studio/TrackEditor"
import Transport from "@/components/studio/Transport"
import BeatMixer from "@/components/studio/BeatMixer"
import ChordProgression from "@/components/studio/ChordProgression"
import ProjectManager from "@/components/studio/ProjectManager"
import ThemeSwitcher from "@/components/studio/ThemeSwitcher"
import Tutorial from "@/components/studio/Tutorial"
import { useStudioState } from "@/hooks/useStudioState"

export default function StudioDashboard() {
  const studio = useStudioState()
  const userId = "demo_user" // Replace with real user ID from auth

  return (
    <div className="flex h-[80vh] bg-gradient-to-br from-black via-gray-900 to-green-900/20 rounded-lg shadow-lg">
      <Sidebar studio={studio} />
      <main className="flex-1 flex flex-col overflow-auto">
        <ProjectManager studio={studio} userId={userId} />
        <Transport studio={studio} />
        <BeatMixer studio={studio} />
        <ChordProgression studio={studio} />
        <TrackEditor studio={studio} />
      </main>
      <aside className="w-72 p-4">
        <ThemeSwitcher />
        <Tutorial />
      </aside>
    </div>
  )
}
