import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  let path = "";
  const breadcrumb = location.pathname.split("/").map((item) => {
    if (item == "") {
      return {
        name: "Home",
        path: "/",
      };
    } else {
      path += "/";
      path += item;
      return {
        name: item[0].toLocaleUpperCase() + item.slice(1),
        path: path,
      };
    }
  });
  console.log(breadcrumb);
  return (
    <div className="w-full bg-[rgba(0,0,0,0.03)] h-[28px] flex justify-center">
      <div className="w-[1200px] max-w-[100%] sm:px-10 px-4 py-1 flex gap-3 items-center">
        {breadcrumb.map((item, ind) => (
          <>
            <Link key={ind} to={item.path}>
              {item.name}
            </Link>
            {ind != breadcrumb.length - 1 && (
              <div className="text-sm leading-[140%] font-ibm text-[rgba(0,0,0,0.32)]">
                •
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default BreadCrumb;
