export default function CookiePolicy() {
  return (
    <>
      {/* Header section with proper spacing for navbar */}
      <div className="relative text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-100px] left-[5%] w-[600px] h-[600px] rounded-full bg-purple-500/70 blur-[70px]"></div>
          <div className="absolute top-[0px] right-[10%] w-[550px] h-[550px] rounded-full bg-blue-500/70 blur-[60px]"></div>
          <div className="absolute bottom-[0%] left-[15%] w-[700px] h-[700px] rounded-full bg-teal-400/60 blur-[80px]"></div>
          <div className="absolute top-[30%] left-[30%] w-[800px] h-[800px] rounded-full bg-purple-600/50 blur-[90px]"></div>
          <div className="bg-brand-700/80 absolute inset-0 -z-10"></div>
        </div>
        <h1 className="pt-[184px] pb-16 md:pt-[184px] md:pb-24 font-semibold text-4xl md:text-6xl max-w-[960px] w-full m-auto px-4 md:px-6">
          Cookie Policy
        </h1>
      </div>

      {/* Main content with proper spacing */}
      <div className="bg-white">
        <div className="max-w-[960px] mx-auto text-slate-500 w-full px-4 md:px-6 pb-20">
          <p className="mt-12 mb-3 text-justify">
            Accessing this Website may involve the use of cookies. Cookies are
            small amounts of information that are stored in the browser used by
            each User - in the various devices they may use to navigate - so
            that the server remembers certain information that will later, and
            only the server that implemented it, will read. Cookies facilitate
            navigation, make it more user-friendly, and do not damage the
            navigation device.
          </p>
          <p className="mt-4 mb-3 text-justify">
            Cookies are automatic procedures for collecting information
            regarding the preferences determined by the User during their visit
            to the Website in order to recognize them as a User, and personalize
            their experience and use of the Website, and they can also, for
            example, help to identify and resolve errors.
          </p>
          <p className="mt-4 mb-3 text-justify">
            The information collected through cookies may include the date and
            time of visits to the Website, the pages viewed, the time spent on
            the Website and the sites visited just before and after it. However,
            no cookie allows this same cookie to contact the User's telephone
            number or any other means of personal contact. No cookie can extract
            information from the User's hard drive or steal personal
            information. The only way that the User's private information can
            become part of the Cookie file is for the user to personally give
            that information to the server.
          </p>
          <p className="mt-4 mb-3 text-justify">
            Cookies that allow a person to be identified are considered personal
            data. Therefore, the Privacy Policy described above will apply to
            them. In this sense, for the use of the same, the consent of the
            User will be necessary. This consent will be communicated, based on
            an authentic choice, offered by an affirmative and positive
            decision, before the initial treatment, removable and documented.
          </p>

          <h3 className="text-lg md:text-2xl font-semibold mb-3 mt-6 text-blue-950">
            Own Cookies
          </h3>
          <p className="mt-4 mb-3 text-justify">
            These are those cookies that are sent to the User's computer or
            device and managed exclusively by Team Up! for the best functioning
            of the Website. The information collected is used to improve the
            quality of the Website and its Content and your experience as a
            User. These cookies allow us to recognize the User as a recurring
            visitor to the Website and adapt the content to offer content that
            fits their preferences.
          </p>

          <h3 className="text-lg md:text-2xl font-semibold mb-3 mt-6 text-blue-950">
            Third-party Cookies
          </h3>
          <p className="mt-4 mb-3 text-justify">
            These are cookies used and managed by external entities that provide
            Team Up! with services requested by Team Up! itself to improve the
            Website and the user experience when browsing the Website. The main
            objectives for which third-party cookies are used are to obtain
            access statistics and analyze navigation information, that is, how
            the User interacts with the Website.
          </p>
          <p className="mt-4 mb-3 text-justify">
            The information obtained refers, for example, to the number of pages
            visited, the language, the place to which the IP address from which
            the User accesses, the number of Users who access, the frequency and
            recurrence of visits, the time of visit, the browser they use, the
            operator or type of device from which the visit is made. This
            information is used to improve the Website, and detect new needs to
            offer Users optimal Content and/or service. In any case, the
            information is collected anonymously and trend reports of the
            Website are prepared without identifying individual users.
          </p>
          <p className="mt-4 mb-3 text-justify">
            You can obtain more information about cookies, information about
            privacy, or consult the description of the type of cookies used,
            their main characteristics, expiration period, etc. at the following
            link(s):
          </p>
          <ul className="list-disc pl-6 mb-3 mt-3 text-justify">
            <li className="mb-1">
              Google Analytics: https://developers.google.com/analytics
            </li>
            <li className="mb-1">
              Microsoft Clarity: https://clarity.microsoft.com/
            </li>
          </ul>
          <p className="mt-4 mb-3 text-justify">
            The entity(ies) in charge of supplying cookies may transfer this
            information to third parties, provided that it is required by law or
            it is a third party that processes this information for said
            entities.
          </p>

          <h3 className="text-lg md:text-2xl font-semibold mb-3 mt-6 text-blue-950">
            Disable, reject and delete cookies
          </h3>
          <p className="mt-4 mb-3 text-justify">
            The User can disable, reject and delete cookies - totally or
            partially - installed on their device through the configuration of
            their browser (including, for example, Chrome, Firefox, Safari,
            Explorer). In this sense, the procedures for rejecting and deleting
            cookies may differ from one Internet browser to another.
            Consequently, the User must refer to the instructions provided by
            the Internet browser they are using. In the event that you reject
            the use of cookies - totally or partially - you may continue to use
            the Website, although the use of some of its features may be
            limited.
          </p>
        </div>
      </div>
    </>
  );
}
