"use client";

import { useEffect, useRef } from "react";

type UseIntervalArgs = {
  callback: () => void;
  delayMs: number | null;
};

export const useInterval = ({ callback, delayMs }: UseIntervalArgs) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delayMs === null) return;
    const id = window.setInterval(() => callbackRef.current(), delayMs);
    return () => window.clearInterval(id);
  }, [delayMs]);
};


