'use client';

import githubClient from '@/lib/githubClient';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';

const page = () => {
    // useEffect(() => {
    //     (async () => {
    //         const octokit = new Octokit({});

    //         const query = `
    //         query userInfo($login: String!) {
    //             user(login: $login) {
    //               name
    //               login
    //               following{
    //                 totalCount
    //               }
    //               followers {
    //                 totalCount
    //               }
    //               gists{
    //                 totalCount
    //               }
    //               contributionsCollection {
    //                 totalCommitContributions
    //               }
    //               repositoriesContributedTo(
    //                 first: 1
    //                 contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
    //               ) {
    //                 totalCount
    //               }
    //               pullRequests(first: 1) {
    //                 totalCount
    //               }
    //               issues(first:1){
    //                 totalCount
    //               }
    //               repositories(
    //                 first: 100
    //                 ownerAffiliations: OWNER
    //                 orderBy: {field: STARGAZERS, direction: DESC}
    //               ) {
    //                 totalCount
    //                 nodes {
    //                   stargazers {
    //                     totalCount
    //                   }
    //                 }
    //               }
    //               organizations(first:1){
    //                 totalCount
    //               }
    //               sponsoring(first:1){
    //                 totalCount
    //               }
    //               createdAt
    //               updatedAt
    //             }
    //           }
    //         `;

            
    //         const { data } = await octokit.graphql(query, {
    //             login: 'devxprite',
    //         });

    //     })();
    // }, []);

    return <div>page</div>;
};

export default page;
