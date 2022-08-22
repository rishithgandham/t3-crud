export interface FormItemProps {
  placeHolder?: string;
  label: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const FormItem = ({
  placeHolder = '',
  label,
  onChange,
  value,
}: FormItemProps) => {
  return (
    <>
      <div className="w-full my-10">
        <label className="font-semibold mx-4 text-md mr-3">{label}</label>
        <br />
        <input
          type="text"
          value={value || ''}
          placeholder={placeHolder}
          className="border-2 p-4 w-full rounded-xl shadow-xl border-gray-200 text-center"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormItem;
