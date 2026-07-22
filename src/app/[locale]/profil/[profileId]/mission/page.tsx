import { notFound } from "next/navigation";
import { getProfile, PROFILES } from "@/lib/profiles";
import { MissionFlow } from "@/components/MissionFlow";

export function generateStaticParams() {
  return PROFILES.map((profile) => ({ profileId: profile.id }));
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  const profile = getProfile(profileId);
  if (!profile) notFound();

  return <MissionFlow profile={profile} />;
}
