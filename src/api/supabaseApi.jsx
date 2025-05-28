import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlowdzoigoyaudsydqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsb3dkem9pZ295YXVkc3lkcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDg3NTUsImV4cCI6MjA1ODk4NDc1NX0.7ltcwu8G4_awXU5SFkAXRGnSeThjTTqAOVUm1bjtmnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getOpenAIApiKey() {
  const { data, error } = await supabase
    .from("openaikey")
    .select("openai")
    .limit(1)
    .single();

  if (error || !data?.openai) {
    console.error("Supabase Error:", error);
    throw new Error("OpenAI Key 조회 실패");
  }

  return data.openai;
}
