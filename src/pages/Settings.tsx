//  External Dependencies
import Image from "next/image";

//  Internal Depedencies
import Collapse from "@/components/Collapse/Collapse";
import CollapseItem from "@/components/Collapse/CollapseItem";

const Settings = () => {
  return (
    <div className="flex justify-center">
      <div className="container pt-20 px-10 flex flex-col gap-10">
        <h1 className="text-5xl font-bold">SETTINGS</h1>
        <div
          id="user-info"
          className="w-full border-2 border-black flex flex-col items-center gap-10 px-10 py-5 md:flex-row"
        >
          <Image
            className="rounded-full"
            src="/icons/GitHubAvatar.png"
            alt="User Avatar"
            width={150}
            height={150}
            priority
          />
          <div id="user-name-email" className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-center md:text-left">
              Edward Liu
            </p>
            <p className="text-xl font-bold text-center md:text-left">
              edev99999@gmail.com
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold">Support</h2>
        <Collapse>
          <CollapseItem
            title="Privacy Policy"
            content={[
              `Thanks for entrusting GitHub, Inc. or GitHub B.V. (“GitHub”, “we”, "us" or "our") with your source code, your projects, and your personal data. This Privacy Statement explains our practices regarding the collection, use, and disclosure of your data, including any personal data we collect and process in connection with our website and any applications, software, products, and services provided by GitHub, including any Beta Previews (collectively, the “Service(s)”).`,
            ]}
          />
          <CollapseItem
            title="Terms of Service"
            content={[
              `1. Responsibility for User-Generated Content`,
              `You may create or upload User-Generated Content while using the Service. You are solely responsible for the content of, and for any harm resulting from, any User-Generated Content that you post, upload, link to or otherwise make available via the Service, regardless of the form of that Content. We are not responsible for any public display or misuse of your User-Generated Content.`,
              `2. GitHub May Remove Content`,
              `We have the right to refuse or remove any User-Generated Content that, in our sole discretion, violates any laws or GitHub terms or policies. User-Generated Content displayed on GitHub Mobile may be subject to mobile app stores' additional terms.`,
              `3. Ownership of Content, Right to Post, and License Grants`,
              `You retain ownership of and responsibility for Your Content. If you're posting anything you did not create yourself or do not own the rights to, you agree that you are responsible for any Content you post; that you will only submit Content that you have the right to post; and that you will fully comply with any third party licenses relating to Content you post.`,
              `Because you retain ownership of and responsibility for Your Content, we need you to grant us — and other GitHub Users — certain legal permissions, listed in Sections D.4 — D.7. These license grants apply to Your Content. If you upload Content that already comes with a license granting GitHub the permissions we need to run our Service, no additional license is required. You understand that you will not receive any payment for any of the rights granted in Sections D.4 — D.7. The licenses you grant to us will end when you remove Your Content from our servers, unless other Users have forked it.`,
              `4. License Grant to Us`,
              `We need the legal right to do things like host Your Content, publish it, and share it. You grant us and our legal successors the right to store, archive, parse, and display Your Content, and make incidental copies, as necessary to provide the Service, including improving the Service over time. This license includes the right to do things like copy it to our database and make backups; show it to you and other users; parse it into a search index or otherwise analyze it on our servers; share it with other users; and perform it, in case Your Content is something like music or video.`,
              `This license does not grant GitHub the right to sell Your Content. It also does not grant GitHub the right to otherwise distribute or use Your Content outside of our provision of the Service, except that as part of the right to archive Your Content, GitHub may permit our partners to store and archive Your Content in public repositories in connection with the GitHub Arctic Code Vault and GitHub Archive Program.`,
              `5. License Grant to Other Users`,
              `Any User-Generated Content you post publicly, including issues, comments, and contributions to other Users' repositories, may be viewed by others. By setting your repositories to be viewed publicly, you agree to allow others to view and "fork" your repositories (this means that others may make their own copies of Content from your repositories in repositories they control).`,
              `If you set your pages and repositories to be viewed publicly, you grant each User of GitHub a nonexclusive, worldwide license to use, display, and perform Your Content through the GitHub Service and to reproduce Your Content solely on GitHub as permitted through GitHub's functionality (for example, through forking). You may grant further rights if you adopt a license. If you are uploading Content you did not create or own, you are responsible for ensuring that the Content you upload is licensed under terms that grant these permissions to other GitHub Users.`,
              `6. Contributions Under Repository License`,
              `Whenever you add Content to a repository containing notice of a license, you license that Content under the same terms, and you agree that you have the right to license that Content under those terms. If you have a separate agreement to license that Content under different terms, such as a contributor license agreement, that agreement will supersede.`,
              `Isn't this just how it works already? Yep. This is widely accepted as the norm in the open-source community; it's commonly referred to by the shorthand "inbound=outbound". We're just making it explicit.`,
              `7. Moral Rights`,
              `You retain all moral rights to Your Content that you upload, publish, or submit to any part of the Service, including the rights of integrity and attribution. However, you waive these rights and agree not to assert them against us, to enable us to reasonably exercise the rights granted in Section D.4, but not otherwise.`,
              `To the extent this agreement is not enforceable by applicable law, you grant GitHub the rights we need to use Your Content without attribution and to make reasonable adaptations of Your Content as necessary to render the Website and provide the Service.`,
            ]}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default Settings;
