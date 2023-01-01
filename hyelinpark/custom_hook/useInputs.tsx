import React, { useState, useCallback } from "react";

type Props = [
  Record<string, string>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];
export function useInputs(initialForm: Record<string, string>): Props {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}
