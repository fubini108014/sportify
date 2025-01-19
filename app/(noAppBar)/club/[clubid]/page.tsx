import { ClubPanel } from "../components/ClubPanel";

export default async function ClubPage({
  params,
}: {
  params: Promise<{ clubid: string }>;
}) {
  const clubId = (await params).clubid;
  //const descriptionElementRef = useRef<HTMLElement>(null);

  return (
    <div>
      <ClubPanel id={clubId} />
    </div>
  );
}
