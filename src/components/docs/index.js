import Snippet from './snippet';
import { FileIcon, FolderIcon, JsIcon } from './icons';

export default function Docs() {
  return (
    <div className="py-8 max-w-full text-gray-700">
      <h2 className="text-3xl pl-7 font-medium mb-10">Documentation</h2>
      <section className="mb-16 px-3 md:px-8 pt-8 ">
        <h2 className="text-2xl font-medium">Features</h2>
        <ul className="list-disc pl-6 mt-4">
          <li className="mb-4">Fully customizable.</li>
          <li className="mb-4">
            Support of the active route (styled by default).
          </li>
          <li className="mb-4">
            No vendor lock-in, you can export it and integrate it in your
            project.
          </li>
        </ul>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">File Structure</h2>
        <div className="pl-2">
          <div className="flex mt-4 mb-3">
            <FolderIcon />
            <span className="pl-2">src</span>
          </div>
          <div className="pl-5 flex mb-3">
            <FolderIcon />
            <span className="pl-2">components</span>
          </div>
          <div className="pl-5 flex mb-3">
            <FolderIcon />
            <span className="pl-2">dashboard</span>
          </div>
          <div className="pl-11 flex mb-3">
            <FolderIcon />
            <span className="pl-2">office</span>
          </div>
          <div className="pl-16 flex mb-3">
            <FolderIcon />
            <span className="pl-2">icons</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">data.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">modal.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">office.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">taskbar.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">topbar.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">windowsMenu.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <FolderIcon />
            <span className="pl-2">provider</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">context.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <JsIcon />
            <span className="pl-2">layout.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <JsIcon />
            <span className="pl-2">main.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <FileIcon />
            <span className="pl-3">style.module.css</span>
          </div>
          <div className="pl-3 flex mb-3">
            <FolderIcon />
            <span className="pl-2">pages</span>
          </div>
          <div className="pl-3 flex mb-3">
            <JsIcon />
            <span className="pl-2">app.js</span>
          </div>
        </div>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">File Structure explained</h2>
        <p className="mt-5">
          We will focus on<span className="px-1 font-medium">dashboard</span>
          folder and its
          <strong className="px-1 font-medium">subfolders</strong>which contain
          all the logic.
        </p>

        <div className="mt-5 mb-12">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">provider</strong>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-4">
            <JsIcon className="h-7 w-7" />
            <span className="px-2 font-medium">context.js</span> :
            <p className="pl-2">
              contains the
              <span className="px-1 font-medium">DashboardProvider</span>
              component where all the dashboard logic is placed. this will then
              be reused in other components. it handles the opening and closing
              of the modal. Also when the route changes.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">office</strong>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-4">
            <FolderIcon className="h-7 w-7" />
            <span className="px-2 font-medium">icons</span> :
            <p className="pl-1">
              As each<span className="px-1 font-medium">section</span> of data
              has an icon, this sub-folder contains the icons of each section.
              You don't need this folder if you are using a package for icons
              such as
              <span className="px-1 font-medium">react-icons</span>,
              <span className="px-1 font-medium">font-awesome</span>
              or other. it also contains a subfolder
              <span className="px-1 font-medium">system</span>which contains all
              system icons used in all the application
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">data.js</span> :
            <p className="pl-1">
              It's in this file that you will add your routes. it is an array of
              objects.
            </p>
          </div>
          <div className="flex flex-wrap mt-8 pl-8">
            <div className="md:w-5/12 overflow-hidden">
              <Snippet />
            </div>
            <ul className="pt-8 md:pt-20 md:pl-4">
              <li className="mb-2">
                <span className="px-1">section :</span> Name of the section
              </li>
              <li className="mb-2">
                <span className="px-1">icon :</span> the icon, imported from
                <strong className="px-1">icons</strong> folder or from your
                library
              </li>
              <li className="mb-2">
                <span className="px-1">title :</span> text that indicate the
                route
              </li>
              <li className="mb-2">
                <span className="px-1">link :</span> name of the route
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-10">
            <JsIcon /> <span className="px-2 font-medium">modal.js</span> :
            <p className="pl-1">
              Contains the modal used to show windows menu or to show links for
              each section icon of taskbar
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">office.js</span> :
            <div className="pl-1">
              <p className="mb-3">
                Contains a constant named
                <span className="px-1 font-medium">OFFICE.</span>This constant
                is a link that represents the desktop. For example if the home
                page is your desktop, no content will be displayed on this page,
                only the desktop.
              </p>
              <p>
                If you have nested layout or if you want to change your desktop
                link, for example your back-office entry point is
                <span className="px-1 font-medium">/admin/dashboard,</span> you
                can change the value of
                <span className="px-1 font-medium">OFFICE</span>
                by giving it the route of your back-office entry point.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">taskbar.js</span> :
            <p className="pl-1">Display the taskbar on bottom.</p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">topbar.js</span> :
            <p className="pl-1">
              Display the topbar when route is not
              <span className="px-1 font-medium">OFFICE</span>. the topbar
              display the name of the route and a closing icon. when you click
              on that closing icon, you will be redirected to
              <span className="px-1 font-medium">OFFICE</span>.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">windowsMenu.js</span>:
            <p className="pl-1">
              Display the start menu when you click on windows icon. the start
              menu displays each section with his links
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap mt-8">
            <JsIcon /> <strong className="px-1">layout.js :</strong> Contains
            the<span className="px-1 font-medium">DashboardLayout</span>
            component used as the layout of the application
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap mt-8">
            <JsIcon /> <strong className="px-1">main.js :</strong>This
            <span className="px-1 font-medium">Main</span>
            component is the content of the route/view. it will render if the
            route in not<span className="px-1 font-medium">OFFICE</span>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap mt-8">
            <FileIcon /> <strong className="px-1">style.module.css :</strong>
            This style sheet is used to change the scrollbar appearance for
            <span className="px-1 font-medium">Modal</span>and
            <span className="px-1 font-medium">Main</span> components
          </div>
        </div>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">How it works ?</h2>
        <ul className="pl-6 list-disc mt-4">
          <li className="mb-3">
            Add your routes in the
            <span className="px-1 font-medium">dashboard/office/data.js</span>
            file
          </li>
          <li className="mb-3">
            If your routes don't exist yet, create your routes in the
            <span className="px-1 font-medium">pages</span>directory
          </li>
          <li className="mb-3">
            Wrap your routes in<span className="px-1 font-medium">app.js</span>
            by the
            <span className="px-1 font-medium">DashboardLayout</span>component
          </li>
        </ul>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">Auto Format and Linting</h2>
        <div className="mt-4">
          The dashboard is provided with
          <span className="pl-1 font-medium">eslint,</span>
          <span className="px-1 font-medium">prettier,</span>
          <span className="px-1 font-medium">lint-staged</span>et
          <span className="px-1 font-medium">husky.</span>Before each commit,
          the
          <span className="px-1 font-medium">pre-commit</span>hook will be
          triggered to run prettier to format the code and eslint to analyze the
          code for possible errors.
        </div>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">Export</h2>
        <p className="mt-4">
          As there is no vendor lock-in, if you already have a dashboard, you
          can just copy the small configuration from
          <span className="px-1 font-medium">tailwind.config.js</span>and paste
          it into your
          <span className="px-1 font-medium">tailwind.config.js</span>
          configuration file. Then copy the
          <span className="px-1 font-medium">dashboard</span>folder into your
          project. You'll also need to install
          <span className="px-1 font-medium">@reach/portal</span> which allows
          to create and append a DOM node to the end of document.body and
          renders a React tree into it. it is useful in this case because we
          have many modal to renders.
        </p>
        <div className="mt-8">
          <ul className="pl-6 list-disc mt-4">
            <li className="mb-3">
              Add your routes in the
              <span className="px-1 font-medium">dashboard/office/data.js</span>
              file
            </li>
            <li className="mb-3">
              Replace your layout by the
              <span className="px-1 font-medium">DashboardLayout</span>component
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16 px-3 md:px-8">
        <h2 className="text-2xl font-medium">Customization</h2>
        <p className="mt-5">
          You can customize everything according to your preferences if it
          doesn't suit you. What we have done is just provide a solid structure
          for better scalability and readability of the code.
        </p>
      </section>

      <section className="px-3 md:px-8">
        <h2 className="text-2xl font-medium">Components</h2>
        <p className="mt-5">
          If you'll need some UI components for Tailwind CSS such as modal,
          accordion, dropdown, tab or other components, you can check out
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://kimia-ui.vercel.app"
            className="text-blue-500 px-1 font-medium"
          >
            Kimia-UI
          </a>
          , a collection of fully customizable UI components, without any
          installation, just copy and paste the component you want to use.
        </p>
      </section>
    </div>
  );
}
