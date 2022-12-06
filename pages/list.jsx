import Image from "next/image";

function List() {
  return (
    <>
      <table class="table-auto text-lg border-separate border-spacing-2 pb-20">
        <thead>
          <tr>
            <th class="" colSpan={2}>
              Reason
            </th>
            <th class="">Date</th>
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
    </>
  );
}
export default List;
