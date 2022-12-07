import Image from "next/image";
import Link from "next/link";

function List() {
  return (
    <>
      <table class="table-auto text-lg border-separate border-spacing-2 pb-10">
        <thead>
          <tr>
            <th class="font-semibold" colSpan={2}>
              Reason
            </th>
            <th class="font-semibold">Date</th>
            <th class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="">1.</td>
            <td class="">
              <Image
                className="absolute right-[175px] md:right-[728px]"
                src="/turkey.png"
                width={25}
                height={25}
              />
              Turkey Drama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td class="">23/8/2022</td>
          </tr>
          <tr>
            <td class="">2.</td>
            <td class="">tbd</td>
          </tr>
        </tbody>
      </table>

      <p className="text-xl font-bold pt-5">honourable mentions:</p>
      <table class="table-auto text-lg border-separate  border-spacing-2 pb-10">
        <tbody>
          <tr>
            <td class="">1.</td>
            <td class="">Dapat surat tawaran masuk UMS</td>
            <td className="text-center">
              <Link
                className="underline text-sky-600"
                target="_blank"
                href="/dome"
              >
                More info
              </Link>
            </td>
          </tr>
          <tr>
            <td class="">2.</td>
            <td class="">Dome 1Borneo tutup</td>
            <td className="text-center">
              <Link
                className="underline text-sky-600"
                target="_blank"
                href="/dome"
              >
                More info
              </Link>
            </td>
          </tr>
          <tr>
            <td class="">3.</td>
            <td class="">Starbuck 1Borneo tutup</td>
            <td className="text-center">
              <Link
                className="underline text-sky-600"
                target="_blank"
                href="https://www.youtube.com/watch?v=E61gXw7aLJk&ab_channel=SendenDahaG%C3%BCzel"
              >
                More info
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default List;
