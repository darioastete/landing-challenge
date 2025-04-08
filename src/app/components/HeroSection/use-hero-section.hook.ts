import { getHeroSection, postMessage } from "@/app/services";
import { useEffect, useState } from "react";
import { SliderResponse } from "./HeroSection.types";
import { HeroLeadDTO } from "@/app/services/types";

export const useHeroSection = () => {
  const [sliders, setSliders] = useState<SliderResponse>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getHeroSection();
        setSliders(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);
  const sendMessage = async (payload: HeroLeadDTO) => {
    try {
      setPosting(true);
      const response = await postMessage(payload);
      setPosting(false);
      return response;
    } catch (err) {
      setPosting(false);
      console.error("Error al enviar feedback:", err);
      throw err;
    }
  };

  return { sliders, loading, error, posting, sendMessage };
}
