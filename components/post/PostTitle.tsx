type Props = {
  loading: boolean;
  title: string | null;
};

export default function PostTitle({ loading, title }: Props) {
  if (loading || title == null) {
    return (
      <div className="flex justify-center">
        <div class="h-10 bg-gray-200 rounded-full w-64 my-2"></div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center my-2">{title}</h1>
    </>
  );
}
