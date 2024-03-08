
export default function Cars({params }: (params: {id: string})) {
    return (
     <h1 className="flex items-center justify-center min-h-screen
      w-screen text-xl"> Car {params.id}</h1>
    );
  }
  