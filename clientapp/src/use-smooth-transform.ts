import { MotionValue, useSpring, useTransform, SpringOptions } from "framer-motion";

export function useSmoothTransform<T>(
  value: MotionValue<T>,
  springOptions: SpringOptions,
  transformer: (input: T) => any
): MotionValue<any> {
  return useSpring(useTransform(value, transformer), springOptions);
}