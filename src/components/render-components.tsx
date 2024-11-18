import React from "react";

import Section from "./section";
import HeroBanner from "./hero-banner";
import BlogBanner from "./blog-banner";
import CardSection from "./card-section";
import TeamSection from "./team-section";
import BlogSection from "./blog-section";
import SectionBucket from "./section-bucket";
import AboutSectionBucket from "./about-section-bucket";
import SectionWithHtmlCode from "./section-with-html-code";
import { ComponentsProps } from "../typescript/pages";
import { VB_EmptyBlockParentClass } from '@contentstack/live-preview-utils'

type RenderComponentsProps = {
  pageComponents: ComponentsProps[]
  cslp: any
  blogsPage?: boolean
  contentTypeUid: string
  entryUid: string
  locale: string
}

export default function RenderComponents({ pageComponents, cslp, blogsPage, contentTypeUid, entryUid, locale }: RenderComponentsProps) {
  console.log(cslp, pageComponents)

  return (
    <div
      {...(cslp.page_components || {})}
      className={pageComponents?.length ? undefined : VB_EmptyBlockParentClass}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >

              {blogsPage ? (
                <BlogBanner
                  blog_banner={component.hero_banner}
                  key={`component-${key}`}
                />
              ) : (
                <HeroBanner
                  hero_banner={component.hero_banner}
                  key={`component-${key}`}
                />
              )}
            </div>
          )
        }
        if (component.section) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >
              <Section section={component.section} key={`component-${key}`} />
            </div>
          );
        }
        if (component.section_with_buckets) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >
              {component.section_with_buckets.bucket_tabular ? (
                <AboutSectionBucket
                  sectionWithBuckets={component.section_with_buckets}
                  key={`component-${key}`}
                />
              ) : (
                <SectionBucket
                  section={component.section_with_buckets}
                  key={`component-${key}`}
                />
              )
              }
            </div>
          )
        }
        if (component.from_blog) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >
              <BlogSection blogs={component.from_blog} key={`component-${key}`} />
            </div>
          );
        }
        if (component.section_with_cards) {
          return (
            <div
            key={`component-${key}`}
            {...cslp?.["page_components__" + key]}
             
          >
            <CardSection
              cards={component.section_with_cards.cards}
              cslp={component.section_with_cards.$}
              key={`component-${key}`}
            />
            </div>
          );
        }
        if (component.section_with_html_code) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >
              <SectionWithHtmlCode
                embedObject={component.section_with_html_code}
                key={`component-${key}`}
              />
            </div>
          );
        }
        if (component.our_team) {
          return (
            <div
              key={`component-${key}`}
              {...cslp?.["page_components__" + key]}

            >
              <TeamSection
                ourTeam={component.our_team}
                key={`component-${key}`}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
